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
 * TargetGroupParams
 */
export interface TargetGroupParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Target Group Code.
   * @nullable
   */
  targetGroupCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Target Group Name.
   * @nullable
   */
  targetGroupName?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * TargetGroupParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class TargetGroupParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  TargetGroupParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link TargetGroupParams.targetGroupCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  targetGroupCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TargetGroupCode',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link TargetGroupParams.targetGroupName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  targetGroupName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TargetGroupName',
    'Edm.String',
    true
  );

  /**
   * Creates an instance of TargetGroupParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, TargetGroupParams, fieldOptions);
  }
}

export namespace TargetGroupParams {
  /**
   * Metadata information on all properties of the `TargetGroupParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TargetGroupParams>[] = [
    {
      originalName: 'TargetGroupCode',
      name: 'targetGroupCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TargetGroupName',
      name: 'targetGroupName',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
