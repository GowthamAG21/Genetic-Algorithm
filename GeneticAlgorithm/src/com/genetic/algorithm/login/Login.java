	package com.genetic.algorithm.login;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.genetic.algorithm.util.DBConnection;

/**
 * Servlet implementation class Login
 */
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Login() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		RequestDispatcher dispatcher = request.getRequestDispatcher("/index.jsp");
	    dispatcher.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try { 
		String user_name=request.getParameter("login_name");
		String password=request.getParameter("login_pass");
		int count;
			count = DBConnection.getRowCount("login_user","username='"+user_name+"' and userpwd='"+password+"'");
		if(count==1){
			if(user_name.equals("admin")){
				response.sendRedirect("http://localhost:8080/GeneticAlgorithm/jsp/Adminpage.jsp?user="+user_name);	
			}
			else{
			response.sendRedirect("http://localhost:8080/GeneticAlgorithm/jsp/Homepage.jsp?user="+user_name);
			}
		}else{
			request.setAttribute("message","invalid user Name and Password");
		    RequestDispatcher dispatcher = request.getRequestDispatcher("/index.jsp");
		    dispatcher.forward(request, response);
			//response.sendRedirect("/index.jsp"); 
		}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
