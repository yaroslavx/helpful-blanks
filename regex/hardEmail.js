`/^
  (
    (
      [^<>()[\]\\.,;:\s@"]+   
      (\. 
        [^<>()[\]\\.,;:\s@"]+ 
      )
      *                      
    )
    |                        
    (".+")                    
  )
    @                        
  (
    (
      \[                      
        [0-9]{1,3}           
        \.                   
        [0-9]{1,3}
        \.
        [0-9]{1,3}
        \.
        [0-9]{1,3}
      \]                      
    )
    | - ИЛИ
    (
      (
        [-a-z0-9]+            
        \.                   
      )+                     
      [a-z]{2,}              
    )
  )
$/i`;
