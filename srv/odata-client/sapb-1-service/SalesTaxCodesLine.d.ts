import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * SalesTaxCodesLine
 */
export interface SalesTaxCodesLine {
    /**
     * Sta Tax On Tax Type.
     * @nullable
     */
    staTaxOnTaxType?: number;
    /**
     * Sta Taxon Tax Code.
     * @nullable
     */
    staTaxonTaxCode?: string;
    /**
     * Stc Code.
     * @nullable
     */
    stcCode?: string;
    /**
     * Sta Type.
     * @nullable
     */
    staType?: number;
    /**
     * Sta Code.
     * @nullable
     */
    staCode?: string;
    /**
     * Row Number.
     * @nullable
     */
    rowNumber?: number;
    /**
     * Effective Rate.
     * @nullable
     */
    effectiveRate?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[SalesTaxCodesLine.build]] instead.
 */
export declare function createSalesTaxCodesLine(json: any): SalesTaxCodesLine;
/**
 * SalesTaxCodesLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SalesTaxCodesLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[SalesTaxCodesLine.staTaxOnTaxType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    staTaxOnTaxType: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SalesTaxCodesLine.staTaxonTaxCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    staTaxonTaxCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SalesTaxCodesLine.stcCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stcCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SalesTaxCodesLine.staType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    staType: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SalesTaxCodesLine.staCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    staCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SalesTaxCodesLine.rowNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rowNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SalesTaxCodesLine.effectiveRate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    effectiveRate: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace SalesTaxCodesLine {
    function build(json: {
        [keys: string]: FieldType;
    }): SalesTaxCodesLine;
}
//# sourceMappingURL=SalesTaxCodesLine.d.ts.map