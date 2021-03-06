import { Moment } from 'moment';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, Time } from '@sap-cloud-sdk/core';
/**
 * PmTimeSheetLineData
 */
export interface PmTimeSheetLineData {
    /**
     * Line Id.
     * @nullable
     */
    lineId?: number;
    /**
     * Date.
     * @nullable
     */
    date?: Moment;
    /**
     * Activity Type.
     * @nullable
     */
    activityType?: number;
    /**
     * Labor Item.
     * @nullable
     */
    laborItem?: string;
    /**
     * Start Time.
     * @nullable
     */
    startTime?: Time;
    /**
     * End Time.
     * @nullable
     */
    endTime?: Time;
    /**
     * Workorder.
     * @nullable
     */
    workorder?: number;
    /**
     * Service Call.
     * @nullable
     */
    serviceCall?: number;
    /**
     * Cost Center.
     * @nullable
     */
    costCenter?: string;
    /**
     * Financial Project.
     * @nullable
     */
    financialProject?: string;
    /**
     * Location.
     * @nullable
     */
    location?: number;
    /**
     * Gps Data.
     * @nullable
     */
    gpsData?: string;
    /**
     * Branch.
     * @nullable
     */
    branch?: number;
    /**
     * Break.
     * @nullable
     */
    break?: Time;
    /**
     * Non Billable Time.
     * @nullable
     */
    nonBillableTime?: Time;
    /**
     * Effective Time.
     * @nullable
     */
    effectiveTime?: Time;
    /**
     * Billable Time.
     * @nullable
     */
    billableTime?: Time;
    /**
     * Full Day.
     * @nullable
     */
    fullDay?: BoYesNoEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[PmTimeSheetLineData.build]] instead.
 */
export declare function createPmTimeSheetLineData(json: any): PmTimeSheetLineData;
/**
 * PmTimeSheetLineDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PmTimeSheetLineDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmTimeSheetLineData> {
    /**
     * Representation of the [[PmTimeSheetLineData.lineId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmTimeSheetLineData.date]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    date: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[PmTimeSheetLineData.activityType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    activityType: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmTimeSheetLineData.laborItem]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    laborItem: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PmTimeSheetLineData.startTime]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    startTime: ComplexTypeTimePropertyField<EntityT>;
    /**
     * Representation of the [[PmTimeSheetLineData.endTime]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    endTime: ComplexTypeTimePropertyField<EntityT>;
    /**
     * Representation of the [[PmTimeSheetLineData.workorder]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    workorder: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmTimeSheetLineData.serviceCall]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    serviceCall: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmTimeSheetLineData.costCenter]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costCenter: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PmTimeSheetLineData.financialProject]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    financialProject: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PmTimeSheetLineData.location]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    location: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmTimeSheetLineData.gpsData]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    gpsData: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PmTimeSheetLineData.branch]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    branch: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmTimeSheetLineData.break]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    break: ComplexTypeTimePropertyField<EntityT>;
    /**
     * Representation of the [[PmTimeSheetLineData.nonBillableTime]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    nonBillableTime: ComplexTypeTimePropertyField<EntityT>;
    /**
     * Representation of the [[PmTimeSheetLineData.effectiveTime]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    effectiveTime: ComplexTypeTimePropertyField<EntityT>;
    /**
     * Representation of the [[PmTimeSheetLineData.billableTime]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    billableTime: ComplexTypeTimePropertyField<EntityT>;
    /**
     * Representation of the [[PmTimeSheetLineData.fullDay]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fullDay: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of PmTimeSheetLineDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PmTimeSheetLineData {
    /**
     * Metadata information on all properties of the `PmTimeSheetLineData` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PmTimeSheetLineData>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PmTimeSheetLineData;
}
//# sourceMappingURL=PmTimeSheetLineData.d.ts.map