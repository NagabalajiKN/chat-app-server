const Room = require('../model/Room');
const asyncHandler = require('express-async-handler');

const deleteRoom = asyncHandler(async (req, res) => {
  const { roomId } = req.params;

  // Find the room by ID
  const room = await Room.findById(roomId);

  if (!room) {
    return res.status(404).json({ message: 'Room not found' });
  }

  // Perform any additional checks here, like checking if the user has permission to delete the room

  // Delete the room
  await Room.findByIdAndDelete(roomId);

  return res.status(200).json({ message: 'Room deleted successfully' });
});

module.exports = {
  deleteRoom
};
