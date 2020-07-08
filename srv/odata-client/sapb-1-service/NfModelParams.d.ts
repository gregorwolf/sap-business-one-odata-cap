import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * NfModelParams
 */
export interface NfModelParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: string;
    /**
     * Nfm Name.
     * @nullable
     */
    nfmName?: string;
    /**
     * Nfm Description.
     * @nullable
     */
    nfmDescription?: string;
    /**
     * Nfm Code.
     * @nullable
     */
    nfmCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[NfModelParams.build]] instead.
 */
export declare function createNfModelParams(json: any): NfModelParams;
/**
 * NfModelParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class NfModelParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[NfModelParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[NfModelParams.nfmName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    nfmName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[NfModelParams.nfmDescription]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    nfmDescription: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[NfModelParams.nfmCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    nfmCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace NfModelParams {
    function build(json: {
        [keys: string]: FieldType;
    }): NfModelParams;
}
//# sourceMappingURL=NfModelParams.d.ts.map