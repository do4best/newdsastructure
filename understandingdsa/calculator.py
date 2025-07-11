from tkinter import Tk,Text,Button
text_field="" #this is a global variable
# define a function
def add_to_field(input):
    global text_field
    text_field = text_field+str(input)
    field.delete("1.0","end")
    field.insert("1.0",text_field)
def calculate():
    global text_field
    try:
        result = str(eval(text_field))
        field.delete("1.0","end")
        field.insert("1.0",result)
    except ZeroDivisionError:
            field.delete("1.0","end")
            field.insert("1.0","Error: Divide by 0")
    except Exception as e:
            field.delete("1.0","end")
            field.insert("1.0","Error")


def clear():
    global text_field
    text_field = ""
    field.delete("1.0","end")

root = Tk()
root.title("A Simple Calculator")
root.geometry("275x252+300+20")
root.resizable(False,False)
root.attributes("-alpha", 0.6)
field = Text(root,height=2,width=23,font=("New Times Roman",15))
field.grid(row=1,column=1,columnspan=4)

# buttons defining
btn1 = Button(root,text="1",command=lambda:add_to_field(1),width=5,font=("New Times Roman",15))
btn1.grid(row=4,column=1)
btn2 = Button(root,text="2",command=lambda:add_to_field(2),width=5,font=("New Times Roman",15))
btn2.grid(row=4,column=2)
btn3 = Button(root,text="3",command=lambda:add_to_field(3),width=5,font=("New Times Roman",15))
btn3.grid(row=4,column=3)
btn4 = Button(root,text="4",command=lambda:add_to_field(4),width=5,font=("New Times Roman",15))
btn4.grid(row=3,column=1)
btn5 = Button(root,text="5",command=lambda:add_to_field(5),width=5,font=("New Times Roman",15))
btn5.grid(row=3,column=2)
btn6 = Button(root,text="6",command=lambda:add_to_field(6),width=5,font=("New Times Roman",15))
btn6.grid(row=3,column=3)
btn7 = Button(root,text="7",command=lambda:add_to_field(7),width=5,font=("New Times Roman",15))
btn7.grid(row=2,column=1)
btn8 = Button(root,text="8",command=lambda:add_to_field(8),width=5,font=("New Times Roman",15))
btn8.grid(row=2,column=2)
btn9 = Button(root,text="9",command=lambda:add_to_field(9),width=5,font=("New Times Roman",15))
btn9.grid(row=2,column=3)
btn0 = Button(root,text="0",command=lambda:add_to_field(0),width=5,font=("New Times Roman",15))
btn0.grid(row=5,column=1)
# operation
btndot = Button(root,text=".",command=lambda:add_to_field("."),width=5,font=("New Times Roman",15))
btndot.grid(row=5,column=2)
clear1 = Button(root,text="-",command=lambda:add_to_field("-"),width=5,font=("New Times Roman",15))
clear1.grid(row=5,column=3)
dash = Button(root,text="Clear",command=lambda:clear(),width=5,font=("New Times Roman",15))
dash.grid(row=5,column=4)
multi = Button(root,text="*",command=lambda:add_to_field("*"),width=5,font=("New Times Roman",15))
multi.grid(row=2,column=4)
plus = Button(root,text="+",command=lambda:add_to_field("+"),width=5,font=("New Times Roman",15))
plus.grid(row=3,column=4)
divide = Button(root,text="/",command=lambda:add_to_field("/"),width=5,font=("New Times Roman",15))
divide.grid(row=4,column=4)
open_left = Button(root,text="(",command=lambda:add_to_field("("),width=5,font=("New Times Roman",15))
open_left.grid(row=6,column=1)
open_right = Button(root,text=")",command=lambda:add_to_field(")"),width=5,font=("New Times Roman",15))
open_right.grid(row=6,column=2)
btn_equal = Button(root,text="=",command=lambda:calculate(),width=12,font=("New Times Roman",15),fg="white",bg="blue")
btn_equal.grid(row=6,column=3,columnspan=2)
root.mainloop()

