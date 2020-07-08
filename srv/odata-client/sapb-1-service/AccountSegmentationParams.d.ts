import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * AccountSegmentationParams
 */
export interface AccountSegmentationParams {
    /**
     * Numerator.
     * @nullable
     */
    numerator?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[AccountSegmentationParams.build]] instead.
 */
export declare function createAccountSegmentationParams(json: any): AccountSegmentationParams;
/**
 * AccountSegmentationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AccountSegmentationParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[AccountSegmentationParams.numerator]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    numerator: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace AccountSegmentationParams {
    function build(json: {
        [keys: string]: FieldType;
    }): AccountSegmentationParams;
}
//# sourceMappingURL=AccountSegmentationParams.d.ts.map