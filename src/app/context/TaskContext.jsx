'use client'
import { createContext, useContext, useState } from "react";
import { client } from "../supabase/client";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};

export const TaskContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [ scores, setScores ] = useState([]) 

  const getScores = async () => {
    const user = client.auth.getUser()
    
    const {error, data} = await client
      .from('scores')
      .select()
      .eq('userId', (await user).data.user.id)
      console.log(data)
    if(error) throw error
    setScores(data)
  }

  const getMatches = async () => {

  }



  const loginWithPassword = async (email) => {
    
    setLoading(true);
    
    try {
      const { error } = await client.auth.signUp({ email , password });
      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      const { error } = await client.auth.signOut();
      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        scores,
        loginWithPassword,
        loading,
        logout,
        getScores,
        getMatches
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};