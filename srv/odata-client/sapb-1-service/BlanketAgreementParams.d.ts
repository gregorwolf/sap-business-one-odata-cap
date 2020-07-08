import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BlanketAgreementParams
 */
export interface BlanketAgreementParams {
    /**
     * Agreement No.
     * @nullable
     */
    agreementNo?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[BlanketAgreementParams.build]] instead.
 */
export declare function createBlanketAgreementParams(json: any): BlanketAgreementParams;
/**
 * BlanketAgreementParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BlanketAgreementParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BlanketAgreementParams.agreementNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    agreementNo: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace BlanketAgreementParams {
    function build(json: {
        [keys: string]: FieldType;
    }): BlanketAgreementParams;
}
//# sourceMappingURL=BlanketAgreementParams.d.ts.map