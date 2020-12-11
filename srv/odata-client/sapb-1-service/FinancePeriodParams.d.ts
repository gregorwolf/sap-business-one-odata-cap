import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * FinancePeriodParams
 */
export interface FinancePeriodParams {
    /**
     * Absolute Entry.
     * @nullable
     */
    absoluteEntry?: number;
    /**
     * Period Indicator.
     * @nullable
     */
    periodIndicator?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[FinancePeriodParams.build]] instead.
 */
export declare function createFinancePeriodParams(json: any): FinancePeriodParams;
/**
 * FinancePeriodParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class FinancePeriodParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, FinancePeriodParams> {
    /**
     * Representation of the [[FinancePeriodParams.absoluteEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absoluteEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[FinancePeriodParams.periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    periodIndicator: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of FinancePeriodParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace FinancePeriodParams {
    /**
     * Metadata information on all properties of the `FinancePeriodParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<FinancePeriodParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): FinancePeriodParams;
}
//# sourceMappingURL=FinancePeriodParams.d.ts.map