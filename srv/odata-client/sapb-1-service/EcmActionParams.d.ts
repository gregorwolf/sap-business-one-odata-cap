import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * EcmActionParams
 */
export interface EcmActionParams {
    /**
     * Action Id.
     * @nullable
     */
    actionId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[EcmActionParams.build]] instead.
 */
export declare function createEcmActionParams(json: any): EcmActionParams;
/**
 * EcmActionParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EcmActionParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[EcmActionParams.actionId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    actionId: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace EcmActionParams {
    function build(json: {
        [keys: string]: FieldType;
    }): EcmActionParams;
}
//# sourceMappingURL=EcmActionParams.d.ts.map