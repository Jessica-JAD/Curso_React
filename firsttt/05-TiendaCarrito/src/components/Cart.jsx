import { useId } from 'react'
import './Cart.css'
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons";
export function Cart() {
    const cartCheckboxId = useId()
    return (
        <>
            <label className='cart-butoon' htmlFor='cart'>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checbox' hidden />
            <aside className='cart'>
                <ul>
                    <li>
                        <img>
                        </img>
                        <div>
                            <strong>iPhone</strong>-$1499
                        </div>

                        <flooters>
                            <small>
                                Qty:1
                            </small>
                            <button></button>
                        </flooters>

                    </li>
                </ul>

                <button>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}