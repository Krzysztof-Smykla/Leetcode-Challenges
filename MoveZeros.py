 def moveZeroes(self, nums):
        i = 0
        length = len(nums)
        count = 0  # count of zeros moved

        while i < length - count:
            if nums[i] == 0:
                nums.pop(i)
                nums.append(0)
                count += 1
            else:
                i += 1