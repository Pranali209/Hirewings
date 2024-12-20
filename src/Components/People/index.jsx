import React from 'react'

function People({ ptxt , Name , CoeName}) {
    return (
        <div>
            <div class=" gap-8 ">
                <div class="  text-center
                 text-customgray p-6 rounded-lg shadow-lg">
                    <p class="text-lg font-medium mb-2">
                         {ptxt}.</p>
                    <div class="flex items-center justify-center mt-4">
                        <div class="flex  items-center">
                            <span class="material-symbols-outlined text-gray-400 mr-2 ">⭐</span>
                            <span class="material-symbols-outlined text-gray-400 mr-2">⭐</span>
                            <span class="material-symbols-outlined text-gray-400 mr-2">⭐</span>
                            <span class="material-symbols-outlined text-gray-400 mr-2">⭐</span>
                            <span class="material-symbols-outlined text-gray-400 mr-2">⭐</span>
                        </div>
                    </div>
                    <p class="text-sm text-gray-400 mt-2">{Name}<br />{CoeName}</p>
                </div>
            </div>
        </div>
    )
}

export default People