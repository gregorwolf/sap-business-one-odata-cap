import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BpFiscalTaxId
 */
export interface BpFiscalTaxId {
    /**
     * Address.
     * @nullable
     */
    address?: string;
    /**
     * Cnae Code.
     * @nullable
     */
    cnaeCode?: number;
    /**
     * Tax Id 0.
     * @nullable
     */
    taxId0?: string;
    /**
     * Tax Id 1.
     * @nullable
     */
    taxId1?: string;
    /**
     * Tax Id 2.
     * @nullable
     */
    taxId2?: string;
    /**
     * Tax Id 3.
     * @nullable
     */
    taxId3?: string;
    /**
     * Tax Id 4.
     * @nullable
     */
    taxId4?: string;
    /**
     * Tax Id 5.
     * @nullable
     */
    taxId5?: string;
    /**
     * Tax Id 6.
     * @nullable
     */
    taxId6?: string;
    /**
     * Tax Id 7.
     * @nullable
     */
    taxId7?: string;
    /**
     * Tax Id 8.
     * @nullable
     */
    taxId8?: string;
    /**
     * Tax Id 9.
     * @nullable
     */
    taxId9?: string;
    /**
     * Tax Id 10.
     * @nullable
     */
    taxId10?: string;
    /**
     * Tax Id 11.
     * @nullable
     */
    taxId11?: string;
    /**
     * Bp Code.
     * @nullable
     */
    bpCode?: string;
    /**
     * Tax Id 12.
     * @nullable
     */
    taxId12?: string;
    /**
     * Tax Id 13.
     * @nullable
     */
    taxId13?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[BpFiscalTaxId.build]] instead.
 */
export declare function createBpFiscalTaxId(json: any): BpFiscalTaxId;
/**
 * BpFiscalTaxIdField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BpFiscalTaxIdField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BpFiscalTaxId.address]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    address: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpFiscalTaxId.cnaeCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cnaeCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BpFiscalTaxId.taxId0]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxId0: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpFiscalTaxId.taxId1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxId1: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpFiscalTaxId.taxId2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxId2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpFiscalTaxId.taxId3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxId3: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpFiscalTaxId.taxId4]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxId4: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpFiscalTaxId.taxId5]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxId5: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpFiscalTaxId.taxId6]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxId6: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpFiscalTaxId.taxId7]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxId7: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpFiscalTaxId.taxId8]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxId8: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpFiscalTaxId.taxId9]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxId9: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpFiscalTaxId.taxId10]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxId10: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpFiscalTaxId.taxId11]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxId11: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpFiscalTaxId.bpCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpFiscalTaxId.taxId12]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxId12: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpFiscalTaxId.taxId13]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxId13: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace BpFiscalTaxId {
    function build(json: {
        [keys: string]: FieldType;
    }): BpFiscalTaxId;
}
//# sourceMappingURL=BpFiscalTaxId.d.ts.map