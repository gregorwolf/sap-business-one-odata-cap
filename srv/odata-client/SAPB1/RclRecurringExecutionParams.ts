/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RclRecurringExecutionHandlingEnum } from './RclRecurringExecutionHandlingEnum';
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
 * RclRecurringExecutionParams
 */
export interface RclRecurringExecutionParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * On Error.
   * @nullable
   */
  onError?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * RclRecurringExecutionParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class RclRecurringExecutionParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  RclRecurringExecutionParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link RclRecurringExecutionParams.onError} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  onError: EnumField<
    EntityT,
    DeSerializersT,
    RclRecurringExecutionHandlingEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'OnError',
    RclRecurringExecutionHandlingEnum,
    true
  );

  /**
   * Creates an instance of RclRecurringExecutionParamsField.
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
      RclRecurringExecutionParams,
      fieldOptions
    );
  }
}

export namespace RclRecurringExecutionParams {
  /**
   * Metadata information on all properties of the `RclRecurringExecutionParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<RclRecurringExecutionParams>[] =
    [
      {
        originalName: 'OnError',
        name: 'onError',
        type: 'Edm.Enum',
        isCollection: false
      }
    ];
}
