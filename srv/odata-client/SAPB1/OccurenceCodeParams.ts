/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoBoeStatus } from './BoBoeStatus';
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
 * OccurenceCodeParams
 */
export interface OccurenceCodeParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Note.
   * @nullable
   */
  note?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Requested Boe Status.
   * @nullable
   */
  requestedBoeStatus?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Is Movement.
   * @nullable
   */
  isMovement?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * OccurenceCodeParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class OccurenceCodeParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  OccurenceCodeParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link OccurenceCodeParams.absEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AbsEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link OccurenceCodeParams.code} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Code', 'Edm.String', true);
  /**
   * Representation of the {@link OccurenceCodeParams.description} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  description: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Description', 'Edm.String', true);
  /**
   * Representation of the {@link OccurenceCodeParams.note} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  note: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Note', 'Edm.String', true);
  /**
   * Representation of the {@link OccurenceCodeParams.requestedBoeStatus} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  requestedBoeStatus: EnumField<
    EntityT,
    DeSerializersT,
    BoBoeStatus,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'RequestedBoeStatus',
    BoBoeStatus,
    true
  );
  /**
   * Representation of the {@link OccurenceCodeParams.isMovement} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isMovement: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('IsMovement', BoYesNoEnum, true);

  /**
   * Creates an instance of OccurenceCodeParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, OccurenceCodeParams, fieldOptions);
  }
}

export namespace OccurenceCodeParams {
  /**
   * Metadata information on all properties of the `OccurenceCodeParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<OccurenceCodeParams>[] = [
    {
      originalName: 'AbsEntry',
      name: 'absEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Code',
      name: 'code',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Description',
      name: 'description',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Note',
      name: 'note',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'RequestedBoeStatus',
      name: 'requestedBoeStatus',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'IsMovement',
      name: 'isMovement',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}
