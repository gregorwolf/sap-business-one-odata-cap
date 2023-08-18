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
 * BoeInstructionParams
 */
export interface BoeInstructionParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Instruction Entry.
   * @nullable
   */
  instructionEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Instruction Code.
   * @nullable
   */
  instructionCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * BoeInstructionParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class BoeInstructionParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  BoeInstructionParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link BoeInstructionParams.instructionEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  instructionEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'InstructionEntry',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link BoeInstructionParams.instructionCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  instructionCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'InstructionCode',
    'Edm.String',
    true
  );

  /**
   * Creates an instance of BoeInstructionParamsField.
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
      BoeInstructionParams,
      fieldOptions
    );
  }
}

export namespace BoeInstructionParams {
  /**
   * Metadata information on all properties of the `BoeInstructionParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BoeInstructionParams>[] = [
    {
      originalName: 'InstructionEntry',
      name: 'instructionEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'InstructionCode',
      name: 'instructionCode',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
