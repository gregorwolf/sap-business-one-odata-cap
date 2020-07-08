import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * WipMapping
 */
export interface WipMapping {
    /**
     * Absolute Entry.
     * @nullable
     */
    absoluteEntry?: number;
    /**
     * Line Number.
     * @nullable
     */
    lineNumber?: number;
    /**
     * Account From.
     * @nullable
     */
    accountFrom?: string;
    /**
     * Account To.
     * @nullable
     */
    accountTo?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[WipMapping.build]] instead.
 */
export declare function createWipMapping(json: any): WipMapping;
/**
 * WipMappingField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WipMappingField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[WipMapping.absoluteEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absoluteEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WipMapping.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WipMapping.accountFrom]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accountFrom: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WipMapping.accountTo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accountTo: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace WipMapping {
    function build(json: {
        [keys: string]: FieldType;
    }): WipMapping;
}
//# sourceMappingURL=WipMapping.d.ts.map