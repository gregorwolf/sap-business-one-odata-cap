import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BpAccountReceivablePayble
 */
export interface BpAccountReceivablePayble {
    /**
     * Account Code.
     * @nullable
     */
    accountCode?: string;
    /**
     * Bp Code.
     * @nullable
     */
    bpCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[BpAccountReceivablePayble.build]] instead.
 */
export declare function createBpAccountReceivablePayble(json: any): BpAccountReceivablePayble;
/**
 * BpAccountReceivablePaybleField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BpAccountReceivablePaybleField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BpAccountReceivablePayble.accountCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accountCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpAccountReceivablePayble.bpCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace BpAccountReceivablePayble {
    function build(json: {
        [keys: string]: FieldType;
    }): BpAccountReceivablePayble;
}
//# sourceMappingURL=BpAccountReceivablePayble.d.ts.map