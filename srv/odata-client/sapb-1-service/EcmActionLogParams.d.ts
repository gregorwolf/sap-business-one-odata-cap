import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class EcmActionLogParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EcmActionLogParams> {
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
    /**
     * Creates an instance of EcmActionLogParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace EcmActionLogParams {
    /**
     * Metadata information on all properties of the `EcmActionLogParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<EcmActionLogParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): EcmActionLogParams;
}
//# sourceMappingURL=EcmActionLogParams.d.ts.map