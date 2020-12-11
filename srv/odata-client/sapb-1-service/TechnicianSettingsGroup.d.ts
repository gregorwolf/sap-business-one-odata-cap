import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * TechnicianSettingsGroup
 */
export interface TechnicianSettingsGroup {
    /**
     * Code.
     * @nullable
     */
    code?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Customized Group.
     * @nullable
     */
    customizedGroup?: BoYesNoEnum;
    /**
     * Enable Edit Time.
     * @nullable
     */
    enableEditTime?: BoYesNoEnum;
    /**
     * Enable Reject.
     * @nullable
     */
    enableReject?: BoYesNoEnum;
    /**
     * Enable Resign.
     * @nullable
     */
    enableResign?: BoYesNoEnum;
    /**
     * Enable Followup.
     * @nullable
     */
    enableFollowup?: BoYesNoEnum;
    /**
     * Enable Signature.
     * @nullable
     */
    enableSignature?: BoYesNoEnum;
    /**
     * Enable Star Rating.
     * @nullable
     */
    enableStarRating?: BoYesNoEnum;
    /**
     * Enable Actual Duration.
     * @nullable
     */
    enableActualDuration?: BoYesNoEnum;
    /**
     * Advanced Dash Board.
     * @nullable
     */
    advancedDashBoard?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[TechnicianSettingsGroup.build]] instead.
 */
export declare function createTechnicianSettingsGroup(json: any): TechnicianSettingsGroup;
/**
 * TechnicianSettingsGroupField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TechnicianSettingsGroupField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TechnicianSettingsGroup> {
    /**
     * Representation of the [[TechnicianSettingsGroup.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TechnicianSettingsGroup.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TechnicianSettingsGroup.customizedGroup]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    customizedGroup: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[TechnicianSettingsGroup.enableEditTime]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    enableEditTime: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[TechnicianSettingsGroup.enableReject]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    enableReject: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[TechnicianSettingsGroup.enableResign]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    enableResign: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[TechnicianSettingsGroup.enableFollowup]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    enableFollowup: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[TechnicianSettingsGroup.enableSignature]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    enableSignature: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[TechnicianSettingsGroup.enableStarRating]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    enableStarRating: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[TechnicianSettingsGroup.enableActualDuration]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    enableActualDuration: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[TechnicianSettingsGroup.advancedDashBoard]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    advancedDashBoard: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of TechnicianSettingsGroupField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace TechnicianSettingsGroup {
    /**
     * Metadata information on all properties of the `TechnicianSettingsGroup` complex type.
     */
    const _propertyMetadata: PropertyMetadata<TechnicianSettingsGroup>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): TechnicianSettingsGroup;
}
//# sourceMappingURL=TechnicianSettingsGroup.d.ts.map