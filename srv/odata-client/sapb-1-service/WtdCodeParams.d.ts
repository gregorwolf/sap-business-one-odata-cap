import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * WtdCodeParams
 */
export interface WtdCodeParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * W Tax Code.
     * @nullable
     */
    wTaxCode?: string;
    /**
     * W Tax Name.
     * @nullable
     */
    wTaxName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[WtdCodeParams.build]] instead.
 */
export declare function createWtdCodeParams(json: any): WtdCodeParams;
/**
 * WtdCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WtdCodeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[WtdCodeParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WtdCodeParams.wTaxCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wTaxCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WtdCodeParams.wTaxName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wTaxName: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace WtdCodeParams {
    function build(json: {
        [keys: string]: FieldType;
    }): WtdCodeParams;
}
//# sourceMappingURL=WtdCodeParams.d.ts.map