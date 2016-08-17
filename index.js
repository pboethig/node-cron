var cron = require('cron');
var cronJob = cron.job("0 */10 * * * *", function()
{
console.info("cron job completed");
});
