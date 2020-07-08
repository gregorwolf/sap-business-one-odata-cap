import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class WtdItemField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace WtdItem {
    function build(json: {
        [keys: string]: FieldType;
    }): WtdItem;
}
//# sourceMappingURL=WtdItem.d.ts.map