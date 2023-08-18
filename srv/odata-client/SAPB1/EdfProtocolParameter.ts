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
 * EdfProtocolParameter
 */
export interface EdfProtocolParameter<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Param Name.
   * @nullable
   */
  paramName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Param Value.
   * @nullable
   */
  paramValue?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Parameter Id.
   * @nullable
   */
  parameterId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Branch Id.
   * @nullable
   */
  branchId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Param Parameters.
   * @nullable
   */
  paramParameters?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * EdfProtocolParameterField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class EdfProtocolParameterField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  EdfProtocolParameter,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link EdfProtocolParameter.code} property for query construction.
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
   * Representation of the {@link EdfProtocolParameter.paramName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paramName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ParamName', 'Edm.String', true);
  /**
   * Representation of the {@link EdfProtocolParameter.paramValue} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paramValue: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ParamValue', 'Edm.String', true);
  /**
   * Representation of the {@link EdfProtocolParameter.parameterId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  parameterId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ParameterID', 'Edm.Int32', true);
  /**
   * Representation of the {@link EdfProtocolParameter.branchId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  branchId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BranchID', 'Edm.Int32', true);
  /**
   * Representation of the {@link EdfProtocolParameter.paramParameters} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paramParameters: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ParamParameters',
    'Edm.String',
    true
  );

  /**
   * Creates an instance of EdfProtocolParameterField.
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
      EdfProtocolParameter,
      fieldOptions
    );
  }
}

export namespace EdfProtocolParameter {
  /**
   * Metadata information on all properties of the `EdfProtocolParameter` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EdfProtocolParameter>[] = [
    {
      originalName: 'Code',
      name: 'code',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ParamName',
      name: 'paramName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ParamValue',
      name: 'paramValue',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ParameterID',
      name: 'parameterId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BranchID',
      name: 'branchId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ParamParameters',
      name: 'paramParameters',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
