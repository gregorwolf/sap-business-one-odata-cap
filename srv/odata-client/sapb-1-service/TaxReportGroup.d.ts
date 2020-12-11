import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * TaxReportGroup
 */
export interface TaxReportGroup {
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Sum.
     * @nullable
     */
    sum?: BoYesNoEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[TaxReportGroup.build]] instead.
 */
export declare function createTaxReportGroup(json: any): TaxReportGroup;
/**
 * TaxReportGroupField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TaxReportGroupField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TaxReportGroup> {
    /**
     * Representation of the [[TaxReportGroup.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxReportGroup.sum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sum: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of TaxReportGroupField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace TaxReportGroup {
    /**
     * Metadata information on all properties of the `TaxReportGroup` complex type.
     */
    const _propertyMetadata: PropertyMetadata<TaxReportGroup>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): TaxReportGroup;
}
//# sourceMappingURL=TaxReportGroup.d.ts.map