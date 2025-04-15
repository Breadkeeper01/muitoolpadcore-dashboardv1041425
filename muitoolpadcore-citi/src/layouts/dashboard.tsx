import * as React from "react";
import { Outlet, useLocation, useParams, matchPath } from "react-router";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import { SidebarFooter } from "../core/sidebarfooter";

export default function Layout() {
  const location = useLocation();
  const { employeeId } = useParams();

  const title = React.useMemo(() => {
    if (location.pathname === "/employees/new") {
      return "New Employee";
    }
    if (matchPath("/employees/:employeeId/edit", location.pathname)) {
      return `Employee ${employeeId} - Edit`;
    }
    if (employeeId) {
      return `Employee ${employeeId}`;
    }
    return undefined;
  }, [location.pathname, employeeId]);

  return (
    <DashboardLayout
      title={title}
      slots={{
        sidebarFooter: SidebarFooter,
        // toolbarActions: ToolbarActionsSearch,
      }}
    >
      <PageContainer>
        <Outlet />
      </PageContainer>
    </DashboardLayout>
  );
}
