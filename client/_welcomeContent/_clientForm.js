const clientForm = `<div class="user-form">
                        <form action="#" method="POST">
                            <h2>Book a call.</h2>
                            <input type="text" name="name" placeholder="Enter your name" required="">
                            <input type="tel" name="phone" placeholder="Enter your phone number" required="">
                            <input type="email" name="email" placeholder="Enter your email" required="">

                            <select name="item" required="">
                                <option value="" disabled="" selected="">Select an item</option>
                                <option value="item1">Web Design</option>
                                <option value="item2">Web development</option>
                                <option value="item3">Backend development</option>
                                <option value="item4">Other</option>
                            </select>

                            <button type="submit">Submit</button>
                        </form>
                    </div>`;