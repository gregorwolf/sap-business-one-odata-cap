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
 * EmployeeRolesInfo
 */
export interface EmployeeRolesInfo<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Employee Id.
   * @nullable
   */
  employeeId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Role Id.
   * @nullable
   */
  roleId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * EmployeeRolesInfoField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class EmployeeRolesInfoField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  EmployeeRolesInfo,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link EmployeeRolesInfo.employeeId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  employeeId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('EmployeeID', 'Edm.Int32', true);
  /**
   * Representation of the {@link EmployeeRolesInfo.lineNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link EmployeeRolesInfo.roleId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  roleId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RoleID', 'Edm.Int32', true);

  /**
   * Creates an instance of EmployeeRolesInfoField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, EmployeeRolesInfo, fieldOptions);
  }
}

export namespace EmployeeRolesInfo {
  /**
   * Metadata information on all properties of the `EmployeeRolesInfo` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EmployeeRolesInfo>[] = [
    {
      originalName: 'EmployeeID',
      name: 'employeeId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'LineNum',
      name: 'lineNum',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'RoleID',
      name: 'roleId',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
