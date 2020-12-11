import { BoBoeStatus } from './BoBoeStatus';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * OccurenceCodeParams
 */
export interface OccurenceCodeParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * Note.
     * @nullable
     */
    note?: string;
    /**
     * Requested Boe Status.
     * @nullable
     */
    requestedBoeStatus?: BoBoeStatus;
    /**
     * Is Movement.
     * @nullable
     */
    isMovement?: BoYesNoEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[OccurenceCodeParams.build]] instead.
 */
export declare function createOccurenceCodeParams(json: any): OccurenceCodeParams;
/**
 * OccurenceCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class OccurenceCodeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, OccurenceCodeParams> {
    /**
     * Representation of the [[OccurenceCodeParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[OccurenceCodeParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[OccurenceCodeParams.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[OccurenceCodeParams.note]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    note: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[OccurenceCodeParams.requestedBoeStatus]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    requestedBoeStatus: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[OccurenceCodeParams.isMovement]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    isMovement: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of OccurenceCodeParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace OccurenceCodeParams {
    /**
     * Metadata information on all properties of the `OccurenceCodeParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<OccurenceCodeParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): OccurenceCodeParams;
}
//# sourceMappingURL=OccurenceCodeParams.d.ts.map