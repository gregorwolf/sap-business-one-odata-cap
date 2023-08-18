/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * TechnicianSettingsGroup
 */
export interface TechnicianSettingsGroup<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Customized Group.
   * @nullable
   */
  customizedGroup?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Enable Edit Time.
   * @nullable
   */
  enableEditTime?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Enable Reject.
   * @nullable
   */
  enableReject?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Enable Resign.
   * @nullable
   */
  enableResign?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Enable Followup.
   * @nullable
   */
  enableFollowup?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Enable Signature.
   * @nullable
   */
  enableSignature?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Enable Star Rating.
   * @nullable
   */
  enableStarRating?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Enable Actual Duration.
   * @nullable
   */
  enableActualDuration?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Advanced Dash Board.
   * @nullable
   */
  advancedDashBoard?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * TechnicianSettingsGroupField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class TechnicianSettingsGroupField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  TechnicianSettingsGroup,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link TechnicianSettingsGroup.code} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Code', 'Edm.Int32', true);
  /**
   * Representation of the {@link TechnicianSettingsGroup.name} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true);
  /**
   * Representation of the {@link TechnicianSettingsGroup.customizedGroup} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customizedGroup: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('CustomizedGroup', BoYesNoEnum, true);
  /**
   * Representation of the {@link TechnicianSettingsGroup.enableEditTime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableEditTime: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('EnableEditTime', BoYesNoEnum, true);
  /**
   * Representation of the {@link TechnicianSettingsGroup.enableReject} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableReject: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('EnableReject', BoYesNoEnum, true);
  /**
   * Representation of the {@link TechnicianSettingsGroup.enableResign} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableResign: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('EnableResign', BoYesNoEnum, true);
  /**
   * Representation of the {@link TechnicianSettingsGroup.enableFollowup} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableFollowup: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('EnableFollowup', BoYesNoEnum, true);
  /**
   * Representation of the {@link TechnicianSettingsGroup.enableSignature} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableSignature: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('EnableSignature', BoYesNoEnum, true);
  /**
   * Representation of the {@link TechnicianSettingsGroup.enableStarRating} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableStarRating: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('EnableStarRating', BoYesNoEnum, true);
  /**
   * Representation of the {@link TechnicianSettingsGroup.enableActualDuration} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableActualDuration: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'EnableActualDuration',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link TechnicianSettingsGroup.advancedDashBoard} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  advancedDashBoard: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AdvancedDashBoard',
    'Edm.Int32',
    true
  );

  /**
   * Creates an instance of TechnicianSettingsGroupField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      TechnicianSettingsGroup,
      fieldOptions
    );
  }
}

export namespace TechnicianSettingsGroup {
  /**
   * Metadata information on all properties of the `TechnicianSettingsGroup` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TechnicianSettingsGroup>[] =
    [
      {
        originalName: 'Code',
        name: 'code',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'Name',
        name: 'name',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'CustomizedGroup',
        name: 'customizedGroup',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'EnableEditTime',
        name: 'enableEditTime',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'EnableReject',
        name: 'enableReject',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'EnableResign',
        name: 'enableResign',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'EnableFollowup',
        name: 'enableFollowup',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'EnableSignature',
        name: 'enableSignature',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'EnableStarRating',
        name: 'enableStarRating',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'EnableActualDuration',
        name: 'enableActualDuration',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'AdvancedDashBoard',
        name: 'advancedDashBoard',
        type: 'Edm.Int32',
        isCollection: false
      }
    ];
}
