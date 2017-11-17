/**
 * @copyright 2017 {@link http://infiniteautomation.com|Infinite Automation Systems, Inc.} All rights reserved.
 * @author Terry Packer
 */
package com.serotonin.m2m2.view.quantize3;

import java.time.Instant;

import com.serotonin.m2m2.rt.dataImage.types.DataValue;
import com.serotonin.m2m2.view.stats.AnalogStatistics;

public class AnalogStatisticsQuantizer extends AbstractPointValueTimeQuantizer<AnalogStatistics> {

    public AnalogStatisticsQuantizer(BucketCalculator bucketCalculator,
            StatisticsGeneratorQuantizerCallback<AnalogStatistics> callback) {
        super(bucketCalculator, callback);
    }

    /* (non-Javadoc)
     * @see com.serotonin.m2m2.view.quantize3.AbstractDataQuantizer#createStatistics(java.time.Instant, java.time.Instant, com.serotonin.m2m2.rt.dataImage.types.DataValue)
     */
    @Override
    protected AnalogStatistics createStatistics(Instant start, Instant end, DataValue startValue) {
        return new AnalogStatistics(start.toEpochMilli(), end.toEpochMilli(), startValue == null ? null
                : startValue.getDoubleValue());
    }
    
}
