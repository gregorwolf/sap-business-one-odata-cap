/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ElectronicDocProtocolCodeStrEnum } from './ElectronicDocProtocolCodeStrEnum';
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
 * ImportDeterminationsParams
 */
export interface ImportDeterminationsParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * ImportDeterminationsParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ImportDeterminationsParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ImportDeterminationsParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ImportDeterminationsParams.code} property for query construction.
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
   * Creates an instance of ImportDeterminationsParamsField.
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
      ImportDeterminationsParams,
      fieldOptions
    );
  }
}

export namespace ImportDeterminationsParams {
  /**
   * Metadata information on all properties of the `ImportDeterminationsParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ImportDeterminationsParams>[] =
    [
      {
        originalName: 'Code',
        name: 'code',
        type: 'Edm.Enum',
        isCollection: false
      }
    ];
}
