/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export function createTechnicianSettingsGroup(json: any): TechnicianSettingsGroup {
  return TechnicianSettingsGroup.build(json);
}

/**
 * TechnicianSettingsGroupField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TechnicianSettingsGroupField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TechnicianSettingsGroup> {
  /**
   * Representation of the [[TechnicianSettingsGroup.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Code', this, 'Edm.Int32');
  /**
   * Representation of the [[TechnicianSettingsGroup.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');
  /**
   * Representation of the [[TechnicianSettingsGroup.customizedGroup]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customizedGroup: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('CustomizedGroup', this);
  /**
   * Representation of the [[TechnicianSettingsGroup.enableEditTime]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableEditTime: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('EnableEditTime', this);
  /**
   * Representation of the [[TechnicianSettingsGroup.enableReject]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableReject: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('EnableReject', this);
  /**
   * Representation of the [[TechnicianSettingsGroup.enableResign]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableResign: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('EnableResign', this);
  /**
   * Representation of the [[TechnicianSettingsGroup.enableFollowup]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableFollowup: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('EnableFollowup', this);
  /**
   * Representation of the [[TechnicianSettingsGroup.enableSignature]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableSignature: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('EnableSignature', this);
  /**
   * Representation of the [[TechnicianSettingsGroup.enableStarRating]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableStarRating: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('EnableStarRating', this);
  /**
   * Representation of the [[TechnicianSettingsGroup.enableActualDuration]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableActualDuration: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('EnableActualDuration', this);
  /**
   * Representation of the [[TechnicianSettingsGroup.advancedDashBoard]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  advancedDashBoard: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AdvancedDashBoard', this, 'Edm.Int32');

  /**
   * Creates an instance of TechnicianSettingsGroupField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, TechnicianSettingsGroup);
  }
}

export namespace TechnicianSettingsGroup {
  /**
   * Metadata information on all properties of the `TechnicianSettingsGroup` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TechnicianSettingsGroup>[] = [{
    originalName: 'Code',
    name: 'code',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Name',
    name: 'name',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CustomizedGroup',
    name: 'customizedGroup',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'EnableEditTime',
    name: 'enableEditTime',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'EnableReject',
    name: 'enableReject',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'EnableResign',
    name: 'enableResign',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'EnableFollowup',
    name: 'enableFollowup',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'EnableSignature',
    name: 'enableSignature',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'EnableStarRating',
    name: 'enableStarRating',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'EnableActualDuration',
    name: 'enableActualDuration',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'AdvancedDashBoard',
    name: 'advancedDashBoard',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): TechnicianSettingsGroup {
    return deserializeComplexTypeV4(json, TechnicianSettingsGroup);
  }
}
