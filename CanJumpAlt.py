def CanJump(nums):
    maxReach = 0  # The farthest index we can currently reach

    for i in range(len(nums)):
        if i > maxReach:
            # We can't reach this position
            return False
        # Update the farthest reachable index from current position
        maxReach = max(maxReach, i + nums[i])
    
    # If we finish the loop, we can reach the last index
    return True