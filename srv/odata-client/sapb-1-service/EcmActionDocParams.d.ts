import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * EcmActionDocParams
 */
export interface EcmActionDocParams {
    /**
     * Protocol.
     * @nullable
     */
    protocol?: string;
    /**
     * Source Type.
     * @nullable
     */
    sourceType?: string;
    /**
     * Source Object.
     * @nullable
     */
    sourceObject?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[EcmActionDocParams.build]] instead.
 */
export declare function createEcmActionDocParams(json: any): EcmActionDocParams;
/**
 * EcmActionDocParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EcmActionDocParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[EcmActionDocParams.protocol]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    protocol: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EcmActionDocParams.sourceType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sourceType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EcmActionDocParams.sourceObject]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sourceObject: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace EcmActionDocParams {
    function build(json: {
        [keys: string]: FieldType;
    }): EcmActionDocParams;
}
//# sourceMappingURL=EcmActionDocParams.d.ts.map