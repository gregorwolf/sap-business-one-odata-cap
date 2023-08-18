/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoRoleInTeam } from './BoRoleInTeam';
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
 * TeamMember
 */
export interface TeamMember<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Team Id.
   * @nullable
   */
  teamId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Employee Id.
   * @nullable
   */
  employeeId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Role In Team.
   * @nullable
   */
  roleInTeam?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * TeamMemberField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class TeamMemberField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  TeamMember,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link TeamMember.teamId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  teamId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TeamID', 'Edm.Int32', true);
  /**
   * Representation of the {@link TeamMember.employeeId} property for query construction.
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
   * Representation of the {@link TeamMember.roleInTeam} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  roleInTeam: EnumField<EntityT, DeSerializersT, BoRoleInTeam, true, false> =
    this._fieldBuilder.buildEnumField('RoleInTeam', BoRoleInTeam, true);

  /**
   * Creates an instance of TeamMemberField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, TeamMember, fieldOptions);
  }
}

export namespace TeamMember {
  /**
   * Metadata information on all properties of the `TeamMember` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TeamMember>[] = [
    {
      originalName: 'TeamID',
      name: 'teamId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'EmployeeID',
      name: 'employeeId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'RoleInTeam',
      name: 'roleInTeam',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}
