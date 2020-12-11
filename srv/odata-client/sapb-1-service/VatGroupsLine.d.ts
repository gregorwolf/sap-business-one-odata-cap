import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * VatGroupsLine
 */
export interface VatGroupsLine {
    /**
     * Effectivefrom.
     * @nullable
     */
    effectivefrom?: Moment;
    /**
     * Rate.
     * @nullable
     */
    rate?: number;
    /**
     * Equalization Tax.
     * @nullable
     */
    equalizationTax?: number;
    /**
     * Datev Code.
     * @nullable
     */
    datevCode?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[VatGroupsLine.build]] instead.
 */
export declare function createVatGroupsLine(json: any): VatGroupsLine;
/**
 * VatGroupsLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class VatGroupsLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, VatGroupsLine> {
    /**
     * Representation of the [[VatGroupsLine.effectivefrom]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    effectivefrom: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[VatGroupsLine.rate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[VatGroupsLine.equalizationTax]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    equalizationTax: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[VatGroupsLine.datevCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    datevCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of VatGroupsLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace VatGroupsLine {
    /**
     * Metadata information on all properties of the `VatGroupsLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<VatGroupsLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): VatGroupsLine;
}
//# sourceMappingURL=VatGroupsLine.d.ts.map