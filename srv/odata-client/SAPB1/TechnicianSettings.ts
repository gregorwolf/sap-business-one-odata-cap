/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
 * TechnicianSettings
 */
export interface TechnicianSettings<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Technician.
   * @nullable
   */
  technician?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Group Code.
   * @nullable
   */
  groupCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * TechnicianSettingsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class TechnicianSettingsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  TechnicianSettings,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link TechnicianSettings.technician} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  technician: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Technician', 'Edm.Int32', true);
  /**
   * Representation of the {@link TechnicianSettings.groupCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  groupCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('GroupCode', 'Edm.Int32', true);

  /**
   * Creates an instance of TechnicianSettingsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, TechnicianSettings, fieldOptions);
  }
}

export namespace TechnicianSettings {
  /**
   * Metadata information on all properties of the `TechnicianSettings` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TechnicianSettings>[] = [
    {
      originalName: 'Technician',
      name: 'technician',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'GroupCode',
      name: 'groupCode',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
