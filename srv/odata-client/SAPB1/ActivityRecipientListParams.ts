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
 * ActivityRecipientListParams
 */
export interface ActivityRecipientListParams<
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
   * Active.
   * @nullable
   */
  active?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Is Multiple.
   * @nullable
   */
  isMultiple?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * ActivityRecipientListParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ActivityRecipientListParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ActivityRecipientListParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ActivityRecipientListParams.code} property for query construction.
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
   * Representation of the {@link ActivityRecipientListParams.name} property for query construction.
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
   * Representation of the {@link ActivityRecipientListParams.active} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  active: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Active', BoYesNoEnum, true);
  /**
   * Representation of the {@link ActivityRecipientListParams.isMultiple} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isMultiple: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('IsMultiple', BoYesNoEnum, true);

  /**
   * Creates an instance of ActivityRecipientListParamsField.
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
      ActivityRecipientListParams,
      fieldOptions
    );
  }
}

export namespace ActivityRecipientListParams {
  /**
   * Metadata information on all properties of the `ActivityRecipientListParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ActivityRecipientListParams>[] =
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
        originalName: 'Active',
        name: 'active',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'IsMultiple',
        name: 'isMultiple',
        type: 'Edm.Enum',
        isCollection: false
      }
    ];
}
