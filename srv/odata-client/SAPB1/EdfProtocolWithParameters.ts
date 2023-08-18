/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EdfProtocolParameter } from './EdfProtocolParameter';
import { ElectronicDocProtocolCodeStrEnum } from './ElectronicDocProtocolCodeStrEnum';
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
 * EdfProtocolWithParameters
 */
export interface EdfProtocolWithParameters<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Is Active.
   * @nullable
   */
  isActive?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Edf Protocol Parameters Collection.
   * @nullable
   */
  edfProtocolParametersCollection?: DeserializedType<
    DeSerializersT,
    'SAPB1.EDFProtocolParameter'
  >;
}

/**
 * EdfProtocolWithParametersField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class EdfProtocolWithParametersField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  EdfProtocolWithParameters,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link EdfProtocolWithParameters.code} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: EnumField<
    EntityT,
    DeSerializersT,
    ElectronicDocProtocolCodeStrEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'Code',
    ElectronicDocProtocolCodeStrEnum,
    true
  );
  /**
   * Representation of the {@link EdfProtocolWithParameters.description} property for query construction.
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
   * Representation of the {@link EdfProtocolWithParameters.isActive} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isActive: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('IsActive', BoYesNoEnum, true);
  /**
   * Representation of the {@link EdfProtocolWithParameters.edfProtocolParametersCollection} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  edfProtocolParametersCollection: CollectionField<
    EntityT,
    DeSerializersT,
    EdfProtocolParameter,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'EDFProtocolParametersCollection',
    EdfProtocolParameter,
    true
  );

  /**
   * Creates an instance of EdfProtocolWithParametersField.
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
      EdfProtocolWithParameters,
      fieldOptions
    );
  }
}

export namespace EdfProtocolWithParameters {
  /**
   * Metadata information on all properties of the `EdfProtocolWithParameters` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EdfProtocolWithParameters>[] =
    [
      {
        originalName: 'Code',
        name: 'code',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'Description',
        name: 'description',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'IsActive',
        name: 'isActive',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'EDFProtocolParametersCollection',
        name: 'edfProtocolParametersCollection',
        type: EdfProtocolParameter,
        isCollection: true
      }
    ];
}
