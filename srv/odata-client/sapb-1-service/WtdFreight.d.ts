import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * WtdFreight
 */
export interface WtdFreight {
    /**
     * Freight Code.
     * @nullable
     */
    freightCode?: number;
    /**
     * W Tax Code.
     * @nullable
     */
    wTaxCode?: string;
    /**
     * Effective Date From.
     * @nullable
     */
    effectiveDateFrom?: Moment;
    /**
     * Effective Date To.
     * @nullable
     */
    effectiveDateTo?: Moment;
}
/**
 * @deprecated Since v1.6.0. Use [[WtdFreight.build]] instead.
 */
export declare function createWtdFreight(json: any): WtdFreight;
/**
 * WtdFreightField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WtdFreightField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WtdFreight> {
    /**
     * Representation of the [[WtdFreight.freightCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    freightCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WtdFreight.wTaxCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wTaxCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WtdFreight.effectiveDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    effectiveDateFrom: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[WtdFreight.effectiveDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    effectiveDateTo: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Creates an instance of WtdFreightField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace WtdFreight {
    /**
     * Metadata information on all properties of the `WtdFreight` complex type.
     */
    const _propertyMetadata: PropertyMetadata<WtdFreight>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): WtdFreight;
}
//# sourceMappingURL=WtdFreight.d.ts.map