import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ElectronicSeries
 */
export interface ElectronicSeries {
    /**
     * Electronic Series.
     * @nullable
     */
    electronicSeries?: number;
    /**
     * Series.
     * @nullable
     */
    series?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Initial Number.
     * @nullable
     */
    initialNumber?: string;
    /**
     * Next Number.
     * @nullable
     */
    nextNumber?: string;
    /**
     * Last Number.
     * @nullable
     */
    lastNumber?: string;
    /**
     * Prefix.
     * @nullable
     */
    prefix?: string;
    /**
     * Approval Year.
     * @nullable
     */
    approvalYear?: number;
    /**
     * Approval Number.
     * @nullable
     */
    approvalNumber?: number;
    /**
     * Remarks.
     * @nullable
     */
    remarks?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ElectronicSeries.build]] instead.
 */
export declare function createElectronicSeries(json: any): ElectronicSeries;
/**
 * ElectronicSeriesField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ElectronicSeriesField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ElectronicSeries.electronicSeries]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    electronicSeries: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ElectronicSeries.series]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    series: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ElectronicSeries.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ElectronicSeries.initialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    initialNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ElectronicSeries.nextNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    nextNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ElectronicSeries.lastNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lastNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ElectronicSeries.prefix]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    prefix: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ElectronicSeries.approvalYear]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    approvalYear: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ElectronicSeries.approvalNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    approvalNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ElectronicSeries.remarks]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    remarks: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ElectronicSeries {
    function build(json: {
        [keys: string]: FieldType;
    }): ElectronicSeries;
}
//# sourceMappingURL=ElectronicSeries.d.ts.map