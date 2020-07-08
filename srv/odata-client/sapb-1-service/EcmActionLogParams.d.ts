import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * EcmActionLogParams
 */
export interface EcmActionLogParams {
    /**
     * Action Id.
     * @nullable
     */
    actionId?: number;
    /**
     * Log Id.
     * @nullable
     */
    logId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[EcmActionLogParams.build]] instead.
 */
export declare function createEcmActionLogParams(json: any): EcmActionLogParams;
/**
 * EcmActionLogParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EcmActionLogParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[EcmActionLogParams.actionId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    actionId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EcmActionLogParams.logId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    logId: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace EcmActionLogParams {
    function build(json: {
        [keys: string]: FieldType;
    }): EcmActionLogParams;
}
//# sourceMappingURL=EcmActionLogParams.d.ts.map