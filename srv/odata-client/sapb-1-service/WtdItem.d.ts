import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * WtdItem
 */
export interface WtdItem {
    /**
     * Item Code.
     * @nullable
     */
    itemCode?: string;
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
 * @deprecated Since v1.6.0. Use [[WtdItem.build]] instead.
 */
export declare function createWtdItem(json: any): WtdItem;
/**
 * WtdItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WtdItemField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WtdItem> {
    /**
     * Representation of the [[WtdItem.itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WtdItem.wTaxCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wTaxCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WtdItem.effectiveDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    effectiveDateFrom: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[WtdItem.effectiveDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    effectiveDateTo: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Creates an instance of WtdItemField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace WtdItem {
    /**
     * Metadata information on all properties of the `WtdItem` complex type.
     */
    const _propertyMetadata: PropertyMetadata<WtdItem>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): WtdItem;
}
//# sourceMappingURL=WtdItem.d.ts.map