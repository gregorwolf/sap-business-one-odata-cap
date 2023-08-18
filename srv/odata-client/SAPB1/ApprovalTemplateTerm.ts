/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ApprovalTemplateConditionTypeEnum } from './ApprovalTemplateConditionTypeEnum';
import { ApprovalTemplateOperationTypeEnum } from './ApprovalTemplateOperationTypeEnum';
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
 * ApprovalTemplateTerm
 */
export interface ApprovalTemplateTerm<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Condition Type.
   * @nullable
   */
  conditionType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Operation Type.
   * @nullable
   */
  operationType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Value.
   * @nullable
   */
  value?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * ApprovalTemplateTermField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ApprovalTemplateTermField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ApprovalTemplateTerm,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ApprovalTemplateTerm.conditionType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  conditionType: EnumField<
    EntityT,
    DeSerializersT,
    ApprovalTemplateConditionTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ConditionType',
    ApprovalTemplateConditionTypeEnum,
    true
  );
  /**
   * Representation of the {@link ApprovalTemplateTerm.operationType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  operationType: EnumField<
    EntityT,
    DeSerializersT,
    ApprovalTemplateOperationTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'OperationType',
    ApprovalTemplateOperationTypeEnum,
    true
  );
  /**
   * Representation of the {@link ApprovalTemplateTerm.value} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  value: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Value', 'Edm.String', true);

  /**
   * Creates an instance of ApprovalTemplateTermField.
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
      ApprovalTemplateTerm,
      fieldOptions
    );
  }
}

export namespace ApprovalTemplateTerm {
  /**
   * Metadata information on all properties of the `ApprovalTemplateTerm` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ApprovalTemplateTerm>[] = [
    {
      originalName: 'ConditionType',
      name: 'conditionType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'OperationType',
      name: 'operationType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Value',
      name: 'value',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
