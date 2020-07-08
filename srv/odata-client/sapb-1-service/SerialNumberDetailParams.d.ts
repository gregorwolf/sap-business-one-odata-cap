import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * SerialNumberDetailParams
 */
export interface SerialNumberDetailParams {
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[SerialNumberDetailParams.build]] instead.
 */
export declare function createSerialNumberDetailParams(json: any): SerialNumberDetailParams;
/**
 * SerialNumberDetailParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SerialNumberDetailParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[SerialNumberDetailParams.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace SerialNumberDetailParams {
    function build(json: {
        [keys: string]: FieldType;
    }): SerialNumberDetailParams;
}
//# sourceMappingURL=SerialNumberDetailParams.d.ts.map