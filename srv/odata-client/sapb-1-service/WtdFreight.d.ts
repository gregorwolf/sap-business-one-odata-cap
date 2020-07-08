import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class WtdFreightField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace WtdFreight {
    function build(json: {
        [keys: string]: FieldType;
    }): WtdFreight;
}
//# sourceMappingURL=WtdFreight.d.ts.map