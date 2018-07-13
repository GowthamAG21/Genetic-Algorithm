package com.genetic.algorithm.login;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.genetic.algorithm.util.DBConnection;

/**
 * Servlet implementation class Registration
 */
public class Registration extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Registration() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		response.sendRedirect("http://localhost:8080/GeneticAlgorithm/registration.jsp"); 
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try {
		String user_name=request.getParameter("username");
		String password=request.getParameter("password");
		String email_id=request.getParameter("email");
		boolean flag=DBConnection.isAvaliable("login_user","username",user_name);
		if(flag==true){
			    request.setAttribute("message","user already avaliable");
			    RequestDispatcher dispatcher = request.getRequestDispatcher("/registration.jsp");
			    dispatcher.forward(request, response);
	    }else{
			DBConnection.executeInsertQuery("insert into login_user (username,userpwd,email) values (" +
					"'"+user_name.toLowerCase()+"','"+password+"','"+email_id+"')");	
			response.sendRedirect("http://localhost:8080/GeneticAlgorithm/index.jsp"); 
		}
        } catch (Exception e) {
			e.printStackTrace();
		}
	}
}
