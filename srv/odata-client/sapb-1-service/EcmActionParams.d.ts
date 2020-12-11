import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class EcmActionParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EcmActionParams> {
    /**
     * Representation of the [[EcmActionParams.actionId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    actionId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of EcmActionParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace EcmActionParams {
    /**
     * Metadata information on all properties of the `EcmActionParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<EcmActionParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): EcmActionParams;
}
//# sourceMappingURL=EcmActionParams.d.ts.map